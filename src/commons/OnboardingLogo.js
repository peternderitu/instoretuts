import React from 'react';
import { Box, Text } from 'react-native-design-utility'
import { Image } from 'react-native';

import {images} from '../constants/images';

const OnboardingLogo = () => (
    <Box center>
        <Box mb="sm">
            <Image source={images.logo}/>
        </Box>
        <Box mb="sm">
            <Text size="xl">
                In
                <Text color="green" size="xl">
                    Store
                </Text>
            </Text>
        </Box>
        <Text size="sm">easy grocery shopping.</Text>
    </Box>
);

export default OnboardingLogo;