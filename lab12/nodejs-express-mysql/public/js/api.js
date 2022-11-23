const baseRequest = async ({ urlPath = "", method = "GET", body }) => {
    try {
        const reqParams = {
            method,
            headers: {
            "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
            console.log(reqParams.body)
        }
        return await fetch(`${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


export const getAllZoos = async () => {
    const rawResponse = await baseRequest({urlPath: `http://localhost:8080/zoo/`, method: "GET" });
    return await rawResponse.json();
};

export const postZoo = (body) => baseRequest({urlPath: `http://localhost:8080`,method: "POST", body });

export const updateZoo = (id, body) =>
    baseRequest({ urlPath: `http://localhost:8080/zoo/${id}`, method: "PUT", body });

export const deleteZoo = (id) =>
    baseRequest({ urlPath: `http://localhost:8080/zoo/${id}`, method: "DELETE" });


