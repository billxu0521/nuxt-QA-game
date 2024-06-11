import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole(event)

  const { data } = await client.from('countries').select()
  console.log(data);
  return { sensitiveData: data }
})
