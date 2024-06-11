import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
  const body = await readBody(event)
  console.log('Received JSON data:', body);
  const client = serverSupabaseServiceRole(event)

  const { data, error } = await client
    .from('test')
    .insert({ content: body })

  if (error) {
    console.error(error)
    return { error: 'Failed to insert data' }
  }

  return { success: true }

})
