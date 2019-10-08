import axios from 'axios';
import config from '@rplan/config'

const externalService = config.get('external_service')

console.log('externalService:', externalService)
