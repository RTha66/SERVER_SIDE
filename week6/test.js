try{
    console.log("normal")
    throw new Error("error message")
} catch(err) {
    console.log("its Error", err.message)
}