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
    callsCount = 0

    async loadLastEvent(groupId: string): Promise<void>{
        this.groupId = groupId
        this.callsCount++
    }
}


describe('CheckLastEventStatus', () => {
    it('should get last event data', async () => {
        const loadLastEventRepository = new LoadLastEventRepositoryMock()
        const checkLastEventStatus = new CheckLastEventStatus(loadLastEventRepository)

        await checkLastEventStatus.perform('any_group_id')

        expect(loadLastEventRepository.groupId).toBe('any_group_id')
        expect(loadLastEventRepository.callsCount).toBe(1)

    })
})