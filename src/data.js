module.exports = {
    getInfomation: () => {
        return {
            image: "images/Company.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae accumsan lectus. Nunc dapibus, risus sit amet placerat lacinia, dui tellus fringilla velit, et aliquet purus erat id nisi. Donec eleifend pharetra sapien, eu laoreet dui ullamcorper sed. Praesent tempor lectus id orci dapibus, non consectetur nunc venenatis. Maecenas ut ornare nunc, et lobortis felis. Integer a fermentum elit. Sed faucibus at mauris ut lacinia. Morbi interdum dolor in lacus convallis ultrices. Fusce faucibus pretium eros, sed tempus est vehicula ac.",
            author: "Akira Honda",
            title: "Manager Director",
        }
    },
    getElectrical: () => {
        return {
            data: [
                {
                    img:"images/electric-tower.png", 
                    title: "ELECTRICAL DESIGN", 
                    description:"Ut aliquam orci ac ullamcorper pellentesque. Ut aliquet, justo a porttitor pretium, velit lacus pretium nulla, sed auctor sem tortor nec urna."
                },
                {
                    img:"images/Mechanical-gear.png",
                    title: "MECHANICAL DESIGN",
                    description:"Ut aliquam orci ac ullamcorper pellentesque. Ut aliquet, justo a porttitor pretium, velit lacus pretium nulla, sed auctor sem tortor nec urna."
                },
                {
                    img:"images/Design-tablet.png",
                    title: "GRAPHIC DESIGN",
                    description:"Ut aliquam orci ac ullamcorper pellentesque. Ut aliquet, justo a porttitor pretium, velit lacus pretium nulla, sed auctor sem tortor nec urna."
                }
            ]
        }
    },
    getProject: () => {
        return {
            title: "Morbi eget elit nec velit lacinia dictum. Integer cursus purus in dui molestie eleifend. Proin laoreet faucibus rutrum. Sed ut ex at massa imperdiet porttitor vitae sed ante. Nam quis odio a nulla elementum maximus. Fusce blandit ullamcorper velit. Etiam sodales lectus mattis libero porttitor, sed porta lorem eleifend. Proin elit sapien, aliquam non porta vel, imperdiet a mauris. Nulla facilisi. Morbi egestas eleifend nisi sit amet ornare. In aliquam velit vel mauris facilisis, ut pharetra sem sagittis.",
            data: [
                {
                    title: "Donec aliquam et nunc fermentum luctus.",
                    description: "",
                    tag: "",
                    date: ""
                },
                {
                    title: "Nulla ut dolor quis purus dignissim.",
                    description: "",
                    tag: "",
                    date: ""
                },
                {
                    title: "Aenean ac ullamcorper risus, nec dignissim neque.",
                    description: "",
                    tag: "",
                    date: ""
                },
                {
                    title: "Pellentesque ut consequat felis.",
                    description: "",
                    tag: "",
                    date: ""
                },
            ]
        }
    }
};