import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LandingPageContainer, BackgroundFlower, Frost, Milano, NeonBtn, NeonText, LogoContainer } from './LandingPageStyled';
import flower from '../../Assets/Images/flower.png';

const LandingPage = () => {
    const navigation = useNavigation();

    return (
        <>
            <LandingPageContainer>
                {Array.from({ length: 700 }, (_, i) => (
                    <BackgroundFlower key={i} source={flower} />
                ))}
            </LandingPageContainer>
            <LogoContainer>
                <Frost>Frost</Frost>
                <Milano>Poems</Milano>
                <NeonBtn NeonColor="rgb(180,242,242)" onPress={() => navigation.navigate('Poetry')}>
                    <NeonText NeonColor="rgb(180,242,242)">Enter</NeonText>
                </NeonBtn>
            </LogoContainer>
        </>
    );
}

export default LandingPage;