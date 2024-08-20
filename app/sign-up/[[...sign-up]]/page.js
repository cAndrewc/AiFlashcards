import React from 'react'
import { Container, Box, Typography, AppBar, Toolbar, Button, Link } from '@mui/material'
import { SignUp, ClerkProvider } from '@clerk/nextjs'

export default function SignUpPage() {
    return(
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <Container maxWidth={false} disableGutters>
                <AppBar position="static" sx={{backgroundColor: '#282828'}}>
                    <Toolbar>
                    <Typography variant="h5" sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, Arial, sans-serif', 
                        fontWeight: 'bold', 
                        color: '#bfbfbf'
                    }}>
                        Flashcard Creator
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{textAlign: 'center', my: 4}}
                    >
                        <Typography variant="h4" component="h1" gutterBottom sx={{
                        flexGrow: 1,
                        fontFamily: 'Roboto, Arial, sans-serif', 
                        fontWeight: 'bold', 
                        color: '#bfbfbf'
                        }}>
                            Sign Up
                        </Typography>
                        <SignUp />
                </Box>
            </Container>
        </ClerkProvider>
    );
}
