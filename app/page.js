'use client'

import { Toolbar, AppBar, Typography, Container, Button, Box, Grid } from "@mui/material"
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'


export default function Home() {
  
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { origin: 'http://localhost:3000' },
    })
    const checkoutSessionJson = await checkoutSession.json()
  
    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })
  
    if (error) {
      console.warn(error.message)
    }
  }
  
  return (
    <Container maxWidth={false} disableGutters>

      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
              <AppBar position="static"  sx={{backgroundColor: '#282828'}}>
                <Toolbar>
                  <Typography variant="h5" sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, Arial, sans-serif', 
                        fontWeight: 'bold', 
                        color: '#bfbfbf'
                    }}>
                    Flashcard Creator
                  </Typography>
                  <SignedOut>
                    <Button sx={{color: '#bfbfbf', 
                                '&:hover': {
                                backgroundColor: '#474747', } }} 
                                href="/sign-in">Login</Button>
                    <Button sx={{color: '#bfbfbf', 
                                '&:hover': {
                                backgroundColor: '#474747', } }} href="/sign-up">
                                Sign Up</Button>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </Toolbar>
              </AppBar>
      </ClerkProvider>
      
      <Box sx={{textAlign: 'center', my: 4}}>
        <Typography variant="h3" component="h1" gutterBottom sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, Arial, sans-serif', 
                        fontWeight: 'bold', 
                        color: '#bfbfbf'
                    }}>
          Welcome to Flashcard Creator
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, Arial, sans-serif', 
                        color: '#ababab'
                    }}>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button
      variant="contained"
      sx={{
        mt: 2,
        mr: 2,
        fontFamily: 'Roboto, Arial, sans-serif',
        backgroundColor: '#5c1682', 
        color: '#bfbfbf', 
        '&:hover': {
          backgroundColor: '#490d85', 
        },
      }}
      href="/generate"
    >
          Get Started
        </Button>
      </Box>

      

      <Box sx={{my: 6, pr: 3}}>
        <Typography variant="h4" component="h2" textAlign={'center'} gutterBottom sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, Arial, sans-serif', 
                        fontWeight: 'bold', 
                        color: '#bfbfbf'
                    }}>Features</Typography>
        <Grid container spacing={4} justifyContent="center" textAlign="center">
          <Grid item xs={12}>
            <Typography sx={{
                          flexGrow: 1,
                          fontFamily: 'Roboto, Arial, sans-serif',  
                          color: '#ababab'
                      }}>
              Create flashcards for studying or for anything else
            </Typography>
          </Grid>
      </Grid>
      </Box>

      <Box sx={{my: 6, pr: 3}}>
        <Typography variant="h4" component="h2" textAlign={'center'} gutterBottom sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, Arial, sans-serif', 
                        fontWeight: 'bold', 
                        color: '#bfbfbf'
                    }}>Pricing</Typography>
        <Grid container spacing={4} justifyContent="center" textAlign="center">
        <Grid item xs={12}>
          <Typography sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, Arial, sans-serif',  
                        fontWeight: 'bold',
                        color: '#bfbfbf'
                    }}>
            Basic Plan
          </Typography>
          <Typography sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, Arial, sans-serif',  
                        color: '#ababab'
                    }}>
            $0.05
          </Typography>
        </Grid>
      </Grid>
      </Box>

    </Container>
  );
}
