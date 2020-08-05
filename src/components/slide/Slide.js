import React, { useState } from './node_modules/react';
import styled from './node_modules/styled-components';

import { ITEMS } from './constants';

import Container from '../shared/container';
import Text from '../shared/text';

/**
 * 변하지 않는 값이기 때문에 상수로 처리
 */
const VISIBLE_COUNT = 3;

const ItemContainer = styled.div`
    width: 250px;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const Image = styled.img`
    width: 100%;
    vertical-align: top;
`;

const Button = styled.span`
    padding: 5px;
    border: 1px solid #efefef;
    border-radius: 2px;
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

function Slide() {
    const [page, setPage] = useState(0);
    const maxPageNumber = Math.ceil(ITEMS.length / VISIBLE_COUNT);

    /**
     * [1,2,3,4,5].slice(0, 3) => [1,2,3]
     * [1,2,3,4,5].slice(3, 6) => [4,5]
     */
    const items = ITEMS.slice(
        page * VISIBLE_COUNT,
        page * VISIBLE_COUNT + VISIBLE_COUNT,
    );

    const handlePrev = () => {
        /**
         * 이전 페이지가 있다면 이전페이지
         * 없다면 max page 로 이동
         */
        if (page > 0) {
            setPage(page - 1);
        } else {
            setPage(maxPageNumber - 1);
        }
    };

    const handleNext = () => {
        /**
         * 다음 페이지가 있다면 다음페이지
         * 없다면 첫 페이지로 이동
         */
        if (page < maxPageNumber - 1) {
            setPage(page + 1);
        } else {
            setPage(0);
        }
    };

    return (
        <Container margin="50px 20px">
            <Text>
                {page + 1}/{maxPageNumber}
            </Text>
            <Container margin="20px 0">
                <Button onClick={handlePrev}>이전</Button>
                <Button onClick={handleNext}>다음</Button>
            </Container>
            {items.map(({ img, title, content }, idx) => (
                <ItemContainer key={idx}>
                    <Image src={img} />
                    <Text block size={17} bold margin="10px 0">
                        {title}
                    </Text>
                    <Text>{content}</Text>
                </ItemContainer>
            ))}
        </Container>
    );
}

export default Slide;
