const axios = require('axios');

const registerCompany = async() => {
    try {
        const registrationData = {
            companyName: 'Train Central',
            ownerName: 'Ram',
            rollNo: '1',
            ownerEmail: 'ram@abc.edu',
            accessCode: 'FKDLjg',
        };

        const response = await axios.post('http://20.244.56.144/train/register', registrationData);
        console.log('Registration response:', response.data);
    } catch (error) {
        console.error('Error registering company:', error);
    }
};

// Call the function to register your company
registerCompany();