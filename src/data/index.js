const menus = [
    { id: 1, name: "Trang chủ", link: "/" },
    { id: 2, name: "Dự án", link: "/projects" },
    { id: 3, name: "Bài viết", link: "/posts" },
    { id: 4, name: "Liên hệ", link: "/contact" },
];

const projects = [
    {
        id: 1,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Dat" },
            { id: 2, name: "Kien" },
            { id: 3, name: "Kien" },
        ],
    },
    { id: 2, name: "Dự án mẫu", author: "Đạt" },
    { id: 3, name: "Dự án Tốt nghiệp", author: "Kiên" },
];
export { projects, menus };
