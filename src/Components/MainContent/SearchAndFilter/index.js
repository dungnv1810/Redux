import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Filter from "./Filter";
const SearchAndFilter = () => {
    return(
        <SearchAndFillterPane>
            <Search/>
            <Filter/>
        </SearchAndFillterPane>
    )
}
export default SearchAndFilter

const SearchAndFillterPane = styled.div`
    margin-bottom: 20px;
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
`