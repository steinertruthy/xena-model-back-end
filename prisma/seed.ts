import { createAccountTypesSeed } from './seeds/create-account-types.seed';
import { createCitiesMock } from './seeds/create-cities.seed';
import { createCountriesSeed } from './seeds/create-countries.seed';
import { createGendersMock } from './seeds/create-genders.seed';
import { createProfileHairColorsSeed } from './seeds/create-profile-hair-colors.seed';
import { createProfileLanguagesSeed } from './seeds/create-profile-languages.seed';
import { createProfileServicesSeed } from './seeds/create-profile-services.seed';
import { createRolesSeed } from './seeds/create-roles.seed';
import { createStatesSeed } from './seeds/create-states.seed';
import { createUsersSeed } from './seeds/create-users.seed';

async function main() {
  await createCountriesSeed();
  await createStatesSeed();
  await createCitiesMock();
  await createGendersMock();
  await createRolesSeed();
  await createAccountTypesSeed();
  await createProfileLanguagesSeed();
  await createProfileServicesSeed();
  await createProfileHairColorsSeed();

  await createUsersSeed();
}

main();
