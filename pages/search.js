import React from 'react';
import Head from "next/head";
import Header from "../components/Header";

function Search(props) {
    return (
        <div>
            <Head>
                <title>Search Results</title>
            </Head>

            <Header/>
        </div>

    );
}

export default Search;