import React, {useEffect} from 'react';
import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { tablet } from "../../Responsive";
import { testimonialsData } from './TestimonialsData';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialContainer = styled.div`
    display: flex;
    flex-direction: column;

    .testimonials__container {
        width: 50%;
        padding: 4rem 4rem;
        ${tablet({ width: "75%"})};
        ${mobile({ width: "90%", padding: "4rem 0rem"})};
        
    }

    .testimonial {
        background: var(--color-primary);
        text-align: center;
        padding: 2rem;
        user-select: none;
        box-shadow: 5px 5px;
    }

    .client__avatar {
        width: 4rem;
        aspect-ratio: 1/1;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto 1rem;
        border: 0.4rem solid var(--color-primary-variant);
    }

    .client__review {
        color: var(--color-light);
        font-weight: 300;
        display: block;
        width: 80%;
        margin: 0.8rem auto 0;
        ${mobile({ width: "90%"})};
        
    }

    .swiper-pagination-clickable .swiper-pagination-bullet {
        background: var(--color-light);
    }
    
`;


const Split = styled.div`
    display: flex;
    justify-content: space-between;
    ${tablet({ flexDirection: "column"})};
`;

const Left = styled.div`
    padding: 0 12rem 0 6rem;
    display: flex;
    flex-direction: column;
    position: relative;
    ${mobile ({ padding: "0 2rem 0 2rem"})};

`;

const Right = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    padding: 3rem;
    flex-direction: column;
    ${tablet({ padding: "3rem 12rem 3rem 6rem"})};
    ${mobile ({ display: "flex", flexDirection: "column", padding: "1rem 2rem 1rem 2rem"})};

    h5 {
    color: #000000;
    }
`;

const Title = styled.div`
    margin-bottom: 2rem;
    ${mobile ({ marginBottom: "1rem"})};

    &.title {
        margin-left: 0rem;
        ${mobile ({ textAlign: "center"})};
    }

    &.title:before {
        content: '';
        display: block;
        width: 90px;
        height: 2px;
        background: var(--color-primary);
        left: 0;
        top: 5%;
        position: absolute;
        ${mobile ({ display: "none"})};
        
    }
`;

const Text = styled.div`
    width: 470px;
    ${mobile ({ textAlign: "center", width: "350px", padding: "0 3rem 0 1rem" })};

    span {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 1.1;
        letter-spacing: 2px;
        ${mobile ({ fontSize: "2rem"})};
    }
`;

const P = styled.div`
    width: 420px;
    ${mobile ({ textAlign: "center", width: "350px", padding: "0 3rem 0 1rem"})};

    span {
        color: var( --color-light);
    }
`;

const Btn = styled.div`
    ${mobile ({ alignItems: "center", justifyContent: "center", textAlign: "center", display: "flex"})};
`;


const Button = styled.button`
    width: 100px;
    padding: 10px;
    background: var(--color-bg-variant);
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    margin-top: 1rem;
`;

const Testimonials = () => {
  return (
    <TestimonialContainer>
        <Split>
                <Left>
                <Title className='title'> Testimonial </Title>
                    <Text>
                    <span> What People Say About Us </span>
                    </Text>  
                </Left>
                <Right>
                    <P>
                    <span>Choose a beautiful and minimalist web agency with values that converts more visitors that any website.</span>
                    </P>
                    <Btn>
                    <Button>
                        Learn More
                    </Button>
                    </Btn>
                    </Right>
                    </Split>

                    <Swiper className='testimonials__container'
                     //install swiper modules
                    modules={[ Navigation, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
                    pagination={{ clickable: true}}>
                    {
                        testimonialsData.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                        <div className='client__avatar'>
                        <img src={avatar} alt={name} />
                        </div>
                        <h5 className='client__name'> {name} </h5>
                        <small className='client__review'>
                        {review}
                        </small>
                    </SwiperSlide>
                    )
                })
            }
            </Swiper>
    </TestimonialContainer>
  )
}

export default Testimonials