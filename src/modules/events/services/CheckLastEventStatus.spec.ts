import { set, reset } from 'mockdate'
import CheckLastEventStatus  from './CheckLastEventStatus'
import LoadLastEventRepositorySpy from '../repositories/fakes/LoadLastEventRepositorySpy'


type SutOutput = { 
    sut: CheckLastEventStatus, 
    loadLastEventRepository: LoadLastEventRepositorySpy
}

const makeSut = (): SutOutput => {
    const loadLastEventRepository = new LoadLastEventRepositorySpy()
    const sut = new CheckLastEventStatus(loadLastEventRepository)
    
    return {
        sut,
        loadLastEventRepository
    }
}


describe('CheckLastEventStatus', () => {
    beforeAll(() => {
        set(new Date())
    })

    afterAll(() => {
        reset()
    })

    const groupId = 'any_group_id'


    it('should get last event data', async () => {
        const { sut, loadLastEventRepository} = makeSut()

        await sut.perform({ groupId })

        expect(loadLastEventRepository.groupId).toBe(groupId)
        expect(loadLastEventRepository.callsCount).toBe(1)

    })

    it('should return status done when group has no event', async () => {
        const { sut, loadLastEventRepository} = makeSut()
        loadLastEventRepository.output = undefined

        const eventStatus = await sut.perform({ groupId })

        expect(eventStatus.status).toBe('done')

    })

    it('should return status active when now is before event and time', async () => {
        const { sut, loadLastEventRepository} = makeSut()
        loadLastEventRepository.output = {
            endDate: new Date(new Date().getTime() + 1),
            reviewDurationInHours: 1
        }

        const eventStatus = await sut.perform({ groupId })

        expect(eventStatus.status).toBe('active')

    })

    it('should return status active when now is equal to event and time', async () => {
        const { sut, loadLastEventRepository} = makeSut()
        loadLastEventRepository.output = {
            endDate: new Date(),
            reviewDurationInHours: 1
        }

        const eventStatus = await sut.perform({ groupId })

        expect(eventStatus.status).toBe('active')

    })

    it('should return status inReview when now is after event and time', async () => {
        const { sut, loadLastEventRepository} = makeSut()
        loadLastEventRepository.output = {
            endDate: new Date(new Date().getTime() - 1),
            reviewDurationInHours: 1
        }

        const eventStatus = await sut.perform({ groupId })

        expect(eventStatus.status).toBe('inReview')

    })

    it('should return status inReview when now is before review time', async () => {
        const reviewDurationInHours = 1
        const reviewDurationInMs = reviewDurationInHours * 60 * 60 * 1000
        const { sut, loadLastEventRepository} = makeSut()
        loadLastEventRepository.output = {
            endDate: new Date(new Date().getTime() - reviewDurationInMs + 1),
            reviewDurationInHours
        }

        const eventStatus = await sut.perform({ groupId })

        expect(eventStatus.status).toBe('inReview')

    })

    it('should return status inReview when now is equal to review time', async () => {
        const reviewDurationInHours = 1
        const reviewDurationInMs = reviewDurationInHours * 60 * 60 * 1000
        const { sut, loadLastEventRepository} = makeSut()
        loadLastEventRepository.output = {
            endDate: new Date(new Date().getTime() - reviewDurationInMs),
            reviewDurationInHours
        }

        const eventStatus = await sut.perform({ groupId })

        expect(eventStatus.status).toBe('inReview')

    })

    it('should return status done when now is after to review time', async () => {
        const reviewDurationInHours = 1
        const reviewDurationInMs = reviewDurationInHours * 60 * 60 * 1000
        const { sut, loadLastEventRepository} = makeSut()
        loadLastEventRepository.output = {
            endDate: new Date(new Date().getTime() - reviewDurationInMs - 1),
            reviewDurationInHours
        }

        const eventStatus = await sut.perform({ groupId })

        expect(eventStatus.status).toBe('done')

    })
})