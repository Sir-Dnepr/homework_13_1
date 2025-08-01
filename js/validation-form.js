"use strict";

const form = document.querySelector('form');
const INPUT_NAME = 'name';
const INPUT_MESSAGE = 'message';
const INPUT_PHONE_NUMBER = 'phone_number';
const INPUT_EMAIL = 'email';

const validationName = (name) => {
    const regExp = /^[A-Za-zА-Яа-я]+$/;

    return regExp.test(name);
}

const validationMessage = (message) => {
    const regExp = /^.{5,}$/;

    return regExp.test(message);
}

const validationPhoneNumber = (phoneNumber) => {
    const regExp = /^\+380\d{9}$/;

    return regExp.test(phoneNumber);
}

const validationEmail = (email) => {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regExp.test(email);
}

const showValidationErrorMessage = (fieldNode) => {
    fieldNode.closest('label').querySelector('span').classList.add('show-message');
};

const hideValidationErrorMessage = (fieldNode) => {
    fieldNode.closest('label').querySelector('span').classList.remove('show-message');
};


const validationForm = (target) => {
    if (target) {
        const formData = new FormData(target);
        const nameValue = formData.get(INPUT_NAME);
        const nameFieldNode = target.elements.namedItem(INPUT_NAME);
        let hasError = false;

        if (validationName(nameValue)) {
            hideValidationErrorMessage(nameFieldNode);
        } else {
            showValidationErrorMessage(nameFieldNode);
            hasError = true;
        }

        const messageValue = formData.get(INPUT_MESSAGE);
        const messageFieldNode = target.elements.namedItem(INPUT_MESSAGE);

        if (validationMessage(messageValue)) {
            hideValidationErrorMessage(messageFieldNode);
        } else {
            showValidationErrorMessage(messageFieldNode);
            hasError = true;
        }

        const phoneNumberValue = formData.get(INPUT_PHONE_NUMBER);
        const phoneNumberFieldNode = target.elements.namedItem(INPUT_PHONE_NUMBER);

        if (validationPhoneNumber(phoneNumberValue)) {
            hideValidationErrorMessage(phoneNumberFieldNode);
        } else {
            showValidationErrorMessage(phoneNumberFieldNode);
            hasError = true;
        }

        const emailValue = formData.get(INPUT_EMAIL);
        const emailFieldNode = target.elements.namedItem(INPUT_EMAIL);

        if (validationEmail(emailValue)) {
            hideValidationErrorMessage(emailFieldNode);
        } else {
            showValidationErrorMessage(emailFieldNode);
            hasError = true;
        }

        if (!hasError) {
            console.log(`email: ${emailValue}`);
            console.log(`name: ${nameValue}`);
            console.log(`phone: ${phoneNumberValue}`);
            console.log(`message: ${messageValue}`);
        }
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validationForm(event.target);
});
