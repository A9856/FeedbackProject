export async function createRecord(feed,payload){
    let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}${feed}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({...payload})
    })
    return await response.json()
}

// if payload has file
export async function createMultipartRecord(feed,payload){
    let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}${feed}`, {
        method: "POST",
        headers: {
        },
        body: payload
    })
    return await response.json()
}

export async function getRecord(feed){
    let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}${feed}`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
    })
    return await response.json()
}

export async function updateRecord(feed,payload){
    let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}${feed}/${payload.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({...payload})
    })
    return await response.json()
}

// if record has file
export async function updateMultipartRecord(feed,payload){
    let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}${feed}/${payload.get('id')}`, {
        method: "PUT",
        headers: {
           },
        body:payload
    })
    return await response.json()
}
export async function deleteRecord(feed,payload){
    let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}${feed}/${payload.id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
    })
    return await response.json()
}
