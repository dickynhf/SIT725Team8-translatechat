/* eslint-disable no-unused-vars */
export const createNewChat = (setMessage, setValue, setCurrentTitle) => {
  setMessage(null);
  setValue("");
  setCurrentTitle(null);
};

export const handleClick = (
  uniqueTitles,
  setCurrentTitle,
  setMessage,
  setValue
) => {
  setCurrentTitle(uniqueTitles);
  setMessage(null);
  setValue("");
};

export const getMessages = async (
  value,
  setMessage,
  setPreviousChats,
  setNewData
) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      message: value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch("http://localhost:8000/completions", options);

    let dataToSave = await (
      await fetch("http://localhost:8000/datas", {
        method: options.method,
        body: JSON.stringify({
          request: value,
        }),
        headers: options.headers,
      })
    ).json();

    setNewData(true);

    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
      setMessage(data.choices[0].message);
      console.log("data saved successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
