import axios from 'axios';

// Get Employee details
export async function getEmployee() {
    var data_success, data_error;
    await axios
        .get('api/users/getemployee')
        .then(function (res) {
            data_success = res.data;
            data_error = res.data.message;
        })
        const data = {
            success: data_success,
            message: data_error
        }
    return data;
}

// Add's a User
export async function addUser(newUser) {
    var data_success;
    await axios
        .post('/api/users/addemployee', newUser)
        .then(function (res) {
            data_success = res.data.success;
        })

    return data_success;
}
