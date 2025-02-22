type cerpenType = {
    id: number;
    slug?: string,
    title: string;
    image: string;
    author: string;
    likes: number | string;
    tags?: string[];
    synopsys: string[];
};

export default cerpenType;
