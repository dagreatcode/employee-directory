// https://officeapi.dev/api/characters/
import axios from "axios";

// import React from 'react';

const URL = "https://www.officeapi.dev/api/characters/";

export default {
    worker: function() {
      return axios.get(URL);
    }
};