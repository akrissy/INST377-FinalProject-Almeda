
import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.get('/api/preferences/:userId', async (req, res) => {
  const { userId } = req.params;
  const { data, error } = await supabase.from('preferences').select('*').eq('user_id', userId);
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.post('/api/preferences', async (req, res) => {
  const { userId, genres, platforms } = req.body;
  const { data, error } = await supabase
    .from('preferences')
    .upsert([{ user_id: userId, genres, platforms }], { onConflict: ['user_id'] });
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.listen(3001, () => console.log('Server running on port 3001'));
