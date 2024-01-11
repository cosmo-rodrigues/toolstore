import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function GET(request: NextRequest) {
  console.log(request.body)

  try {
    const supabase = createRouteHandlerClient({ cookies })

    const { data } = await supabase.from('products').select('*')

    if (data) return NextResponse.json(data)

    return []

  } catch (error) {
    console.error('LIST PRODUCTS', error)
  }
}
