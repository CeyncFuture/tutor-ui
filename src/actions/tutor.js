import fetch from "../utils/apiService";

export const tutorActions = {
    saveQuestionnaire(payload, navigate){
        return () => {
            return fetch('/tutor/questionnaire', {
                method: 'POST',
                body: payload
            })
                .then((response) => {
                    if (response.data) {
                        navigate('/home')
                    } else {
                        console.log(response.error);
                    }
                });
        }
    },
};
