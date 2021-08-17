import furnitureService from "../../services/furnitureService.js";
import { dashboardTemplate } from "./dashboardTemplate.js";


async function getView(context) {
    let allFurnitures = await furnitureService.getAll();
    let templateResult = dashboardTemplate(allFurnitures);
    context.renderView(templateResult);
}

export default {
    getView
};