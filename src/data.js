module.exports = {
    getInfomation: () => {
        return {
            image: "images/Company.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae accumsan lectus. Nunc dapibus, risus sit amet placerat lacinia, dui tellus fringilla velit, et aliquet purus erat id nisi. Donec eleifend pharetra sapien, eu laoreet dui ullamcorper sed. Praesent tempor lectus id orci dapibus, non consectetur nunc venenatis. Maecenas ut ornare nunc, et lobortis felis. Integer a fermentum elit. Sed faucibus at mauris ut lacinia. Morbi interdum dolor in lacus convallis ultrices. Fusce faucibus pretium eros, sed tempus est vehicula ac.",
            author: "Akira Honda",
            title: "Manager Director",
        }
    },
    getService: () => {
        return {
            data: [
                {
                    img:"images/electric-tower.png", 
                    title: "ELECTRICAL DESIGN", 
                    description:"Thiết kế bản vẽ hệ thống điện trong công nghiệp"
                },
                {
                    img:"images/Mechanical-gear.png",
                    title: "MECHANICAL DESIGN",
                    description:"Thiết kế bản vẽ chi tiết máy móc hệ thống thiết bị công nghiệp."
                },
                {
                    img:"images/Architecture.png",
                    title: "ARCHITECTURE DESIGN",
                    description:"Thiết kế kiến trúc, kết cấu, ngoại thất cho các công trình xây dựng"
                }
            ]
        }
    },

    getServiceItem: () => {
        return [
            [   
                "Thiết kế bản vẽ sơ đồ lắp đặt điện",
                "Thiết kế Sơ đồ bản vẽ điện",
                "Thiết kế sơ đồ đi dây và đấu nối trong hệ thống điện",
                "Thiết kế tủ điện",
                "Thiết kế hệ thống chiếu sáng",
                "Thiết kế bản vẽ chi tiết kỹ thuật lắp đặt các thiết bị điện",
                "Giám sát thi công lắp đặt và vận hành hệ thống",
                "Lập trình hệ thống PLC (HMI và CODE)",
                "Bốc khối lượng dự án"
            ],
            [
                "Thiết kế cơ khí công nghiệp",
                "Thiết kế máy",
                "Thiết kế bản vẽ layout và bản vẽ chi tiết CAD 2D và 3D",
                "Thiết kế Bản mô tả chi tiết kỹ thuật"
            ],
            [
                "Thiết kế bản vẽ thi công",
                "Thiết kế bản vẽ lắp tấm trần",
                "Thiết kế bản vẽ ngoại thất"
            ]
     ]
    },

    getProject: () => {
        return {
            title: "Morbi eget elit nec velit lacinia dictum. Integer cursus purus in dui molestie eleifend. Sed mollis luctus placerat. Donec at est dapibus est hendrerit aliquet quis eu elit.",
            data: [
                {
                    name: "Donec aliquam et nunc.",
                    description: "Mauris sollicitudin auctor velit non porta. Nulla aliquam magna tincidunt ligula luctus dictum.",
                    tag: ["3D", "AutoCAD", "Electric", "BOM"],
                    date: "2014-01-04",
                    image: "images/project1.jpg"
                },
                {
                    name: "Nulla ut dolor quis.",
                    description: " Curabitur commodo sit amet nulla suscipit laoreet. ",
                    tag: ["AutoCAD", "3D", "Electrical", "HMI", "CODE"],
                    date: "2015-12-14",
                    image: "images/project2.jpg"
                },
                {
                    name: "Aenean ac ullamcorper risus.",
                    description: "Aliquam aliquet et neque nec mattis. Proin ac nisi at dui consectetur ullamcorper.",
                    tag: ["DeCAD", "Mechanical", "Machine parts"],
                    date: "2017-8-30",
                    image: "images/project3.jpg"
                },
                {
                    name: "Pellentesque ut.",
                    description: "Vivamus sed tristique nulla, in volutpat nisi. Integer sit amet volutpat leo. ",
                    tag:  ["3D", "AutoCAD", "Electric", "BOM"],
                    date: "2017-04-20",
                    image: "images/project4.jpg"
                },

                {
                    name: "Donec aliquam et nunc.",
                    description: "Mauris sollicitudin auctor velit non porta. Nulla aliquam magna tincidunt ligula luctus dictum.",
                    tag: ["3D", "AutoCAD", "Electric", "BOM"],
                    date: "2014-01-04",
                    image: "images/project1.jpg"
                },
                {
                    name: "Nulla ut dolor quis.",
                    description: " Curabitur commodo sit amet nulla suscipit laoreet. ",
                    tag: ["AutoCAD", "3D", "Electrical", "HMI", "CODE"],
                    date: "2015-12-14",
                    image: "images/project2.jpg"
                },
                {
                    name: "Aenean ac ullamcorper risus.",
                    description: "Aliquam aliquet et neque nec mattis. Proin ac nisi at dui consectetur ullamcorper.",
                    tag: ["DeCAD", "Mechanical", "Machine parts"],
                    date: "2017-8-30",
                    image: "images/project3.jpg"
                },
                {
                    name: "Aenean ac ullamcorper risus.",
                    description: "Aliquam aliquet et neque nec mattis. Proin ac nisi at dui consectetur ullamcorper.",
                    tag: ["DeCAD", "Mechanical", "Machine parts"],
                    date: "2017-8-30",
                    image: "images/project3.jpg"
                },
            ]
        }
    }
};