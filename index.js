
const supabaseClient = supabase.createClient(
  'https://xsirlwdiqebswffkrqky.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzaXJsd2RpcWVic3dmZmtycWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0Mjg2ODYsImV4cCI6MTk3OTAwNDY4Nn0.lEO15o7dRjbbwoU3Cni49uvti8FbETduIfLWjPk6-WE'
)

const button = document.getElementById('loginBtn')
const emailField = document.getElementById('email')
const passwordField = document.getElementById('password')

button.addEventListener('click', async (event) => {
    event.preventDefault()

    const { user, session, error } = await supabaseClient.auth.signUp({
        email: emailField.value,
        password: passwordField.value,
    })
    console.log(user, session, error);
})
