import api from "./api"

const getGifts = () => {
    return api.get(`${api.url.gifts}`).then(res => res.data)
}

const createGift = ({ name }: { name: string }) => {
    return api.post(`${api.url.gifts}`, { name }).then(res => res.data)
}

const updateGift = (id: string, { name }: { name: string }) => {
    return api.put(`${api.url.gifts}/${id}`, { name }).then(res => res.data)
}

const deleteGift = (id: string) => {
    return api.delete(`${api.url.gifts}/${id}`).then(res => res.data)
}

const giftService = {
    getGifts,
    createGift,
    deleteGift,
    updateGift
}

export default giftService;