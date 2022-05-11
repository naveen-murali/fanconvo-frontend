export enum SignupTypes {
    FAN = "fan",
    TALENT = "talent"
};

export const SignupBtns = [
    {
        content: "fan signup",
        type: SignupTypes.FAN
    },
    {
        content: "talent signup",
        type: SignupTypes.TALENT
    }
];

export const SignupInputs = [
    {
        label: "First name *",
        type: "text",
        placeholeder: "First name",
        name: "firstName",
        validation: {
            required: true,
            message: "first name is required"
        }
    },
    {
        label: "Last name *",
        type: "text",
        placeholeder: "Last name",
        name: "lastName",
        validation: {
            required: true,
            message: "last name is required"
        }
    },
    {
        label: "Username *",
        type: "text",
        placeholeder: "Username",
        name: "username",
        validation: {
            required: true,
            message: "username name is required"
        }
    },
    {
        label: "Email *",
        type: "email",
        placeholeder: "email",
        name: "email",
        validation: {
            required: true,
            pattern: /^\S+@\S+$/i
        }
    },
    {
        label: "Timezone *",
        type: "select",
        options: [
            "PST8PDT",
            "Asia/Kolkata",
            "US/Arizona",
            "America/Los_Angeles",
            "Canada/Pacific",
            "Africa/Algiers",
            "US/Eastern",
            "Europe/London",
        ],
        placeholeder: "timezone",
        name: "timezone",
        validation: {
            required: true,
        }
    },
    {
        label: "Password *",
        type: "password",
        placeholeder: "Password",
        name: "password",
        validation: {
            required: true,
        }
    },
];