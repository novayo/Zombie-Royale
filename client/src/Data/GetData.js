import { user, map, update } from './Restore'

export function GetData(kind) {
    switch (kind) {
        case "update":
            return update;
        case "room":
            return user.Room;
        case "name":
            return user.name;
        case "windowSize":
            return user.windowSize;
        case "map":
            return map
        default:
            return null;
    }

}
