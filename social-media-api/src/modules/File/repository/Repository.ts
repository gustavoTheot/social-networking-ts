import { File } from "./IFileRepository";

export class FileRepository {

    async createFile(dataFile: any) {
        const file = new File(dataFile);
        return await file.save()
    }
}