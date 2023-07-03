/* eslint-disable no-unused-vars */
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
// import React from 'react';
import { useState } from 'react';
import SForm from './SForm';
import TForm from './TForm';

function AuthPage() {

    const { palette } = useTheme();
    const [role, setRole] = useState(1);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    return (
        <Box>
            <Box p="1rem 6%" textAlign="center" backgroundColor={palette.background.alt}>
                <Typography fontFamily="serif" fontWeight="bold" fontSize={32} color="deepskyblue">
                    EduHub
                </Typography>
            </Box>

            <Box display="flex" justifyContent="center" gap="1rem" m="1rem 0">
                <Box height="10vh" width="20vw" display="flex" backgroundColor={palette.background.alt} borderRadius="50px" padding="0.5rem">
                    <Box onClick={() => setRole(1)} width="100%" height="100%" borderRadius="50px " fontSize="1.4rem"
                        fontFamily="serif" backgroundColor={role === 1 && "green"} color={role === 1 && "white"} display="flex" justifyContent="center" alignItems="center">Student</Box>
                    <Box onClick={() => setRole(2)} width="100%" height="100%" borderRadius="50px " fontSize="1.4rem"
                        fontFamily="serif" backgroundColor={role !== 1 && "green"} color={role !== 1 && "white"} display="flex" justifyContent="center" alignItems="center">Teacher</Box>
                </Box>
            </Box>

            <Box width={isNonMobileScreens ? "50%" : "90%"}
                backgroundColor={palette.background.alt}
                p="2rem" m="2rem auto" borderRadius="1.5rem">
                <Typography
                    fontWeight="400" variant="h4" textAlign="center"
                    fontFamily="serif" sx={{ mb: "1.5rem" }}
                >Welcome to eduHub community</Typography>
                {role === 1 ? <SForm /> : <TForm />}
            </Box>
        </Box>
    )
}

export default AuthPage;