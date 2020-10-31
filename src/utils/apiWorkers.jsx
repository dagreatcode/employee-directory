// https://officeapi.dev/api/characters/
import axios from "axios";

// import React from 'react';

const URL = "https://www.officeapi.dev/api/characters/";

const apiWorkers = () => {
    const worker = axios.get(URL);
    return worker;
};

export default apiWorkers;