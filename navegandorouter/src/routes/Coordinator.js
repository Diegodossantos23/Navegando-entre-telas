export const goToBackEndPage = (history) => {
    history.push("/back-end")
}

export const goToFrontEndPage = (history) => {
    history.push("/front-end")
}

export const goBack = (history) => {
    history.goBack()
}