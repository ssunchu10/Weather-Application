import moment from "moment";

const convertUnixTime = (unixtime, timezonOffset) => {
    return moment.unix(unixtime).utcOffset(timezonOffset / 60).format("h:mm A");
};

export default convertUnixTime;