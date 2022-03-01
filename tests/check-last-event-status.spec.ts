class CheckLastEventStatus {
    constructor (private readonly loadLastEventRepository: LoadLastEventRepository){}

    async perform( groupID: string): Promise<void>{
        await this.loadLastEventRepository.loadLastEvent(groupID)

    }
}


interface LoadLastEventRepository{
    loadLastEvent: (gruopId: string) => Promise<void>
}

class LoadLastEventRepositoryMock implements LoadLastEventRepository{
    groupId?: string

    async loadLastEvent(groupId: string): Promise<void>{
        this.groupId = groupId
    }
}


describe('CheckLastEventStatus', () => {
    it('should get last event data', async () => {
        const loadLastEventRepository = new LoadLastEventRepositoryMock()
        const checkLastEventStatus = new CheckLastEventStatus(loadLastEventRepository)

        await checkLastEventStatus.perform('any_group_id')

        expect(loadLastEventRepository.groupId).toBe('any_group_id')

    })
})