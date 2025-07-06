import 'dotenv/config'
import { exec } from 'child_process'

const { SUPABASE_PROJECT_ID } = process.env

exec(
  `supabase gen types typescript --project-id ${SUPABASE_PROJECT_ID} --schema public > lib/supabase/database.types.ts`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Types generated!')
  }
)