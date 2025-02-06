'use client'

import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { usePathname } from 'next/navigation';


function NavigationBar() {

    const pathname = usePathname();

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: " flex", justifyContent: 'end' }}>

                    <Button color="inherit">
                        {pathname == '/' ? <Link href="/products">Products</Link> : <Link href="/">Home</Link>}

                    </Button>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default NavigationBar