const apiRequests = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    const response = fetch(url, optionsObj);
    console.log(response)
    if (!response.ok) throw Error();
  } catch (err) {
    errMsg = err.Message;
    console.log(err)
    console.log(errMsg)
  } finally {
    return errMsg;
  }
};

export default apiRequests;
