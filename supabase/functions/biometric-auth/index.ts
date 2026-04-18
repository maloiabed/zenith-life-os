import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { action, publicKey, challenge, signature, userId } = await req.json()

    // Create Supabase client with Service Role Key for administrative tasks
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (action === 'enroll') {
      // Simulate enrolling biometric data by updating the profile
      const { error } = await supabaseClient
        .from('profiles')
        .update({ biometric_enrolled: true })
        .eq('id', userId)

      if (error) throw error

      return new Response(
        JSON.stringify({ message: 'Biometrics enrolled successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

    if (action === 'verify') {
      // In a real app, you'd use a library like @simplewebauthn/server to verify the signature
      // Here we simulate a successful verification
      
      const { data: profile, error: profileError } = await supabaseClient
        .from('profiles')
        .select('biometric_enrolled')
        .eq('id', userId)
        .single()

      if (profileError || !profile?.biometric_enrolled) {
        return new Response(
          JSON.stringify({ error: 'Biometrics not enrolled for this user' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
        )
      }

      // If verification passes, we would typically generate a custom token or return a success signal
      return new Response(
        JSON.stringify({ message: 'Biometric verification successful', verified: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

    return new Response(
      JSON.stringify({ error: 'Invalid action' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})