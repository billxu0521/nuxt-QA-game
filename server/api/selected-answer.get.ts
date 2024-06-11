import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole(event)

  const { data, error } = await client
    .from('test')
    .select();
    console.log(data);
    return { answerData: data }
})
