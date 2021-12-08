import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

const services = [
    {
        name: 'Internship',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem quos et incidunt, explicabo harum sed placeat natus obcaecati ea?',
    },
    {
        name: 'Job Offer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem quos et incidunt, explicabo harum sed placeat natus obcaecati ea?',
    },
    {
        name: 'Intern with job',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem quos et incidunt, explicabo harum sed placeat natus obcaecati ea?',
    },
    {
        name: 'Special Member',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem quos et incidunt, explicabo harum sed placeat natus obcaecati ea?',
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;