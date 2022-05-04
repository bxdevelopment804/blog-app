import React from 'react';
import Navbar from './shared/navbar';
import Main from './pages/main';

import UserRegistrationProvider from './UserRegistrationProvider';
import UserNameProvider from './UserNameProvider';
import UserEmailProvider from './UserEmailProvider';
import UserPasswordProvider from './UserPasswordProvider';
import UserUUIDProvider from './UserUUIDProvider';
import UserPhotoProvider from './UserPhotoProvider';
import PostsProvider from './PostsProvider';
import ValidationProvider from './ValidationProvider';
import DaVinciPostsProvider from './shared/DaVinciPostsProvider';
import HarryPotterPostsProvider from './shared/HarryPotterPostsProvider';
import HungerGamesPostsProvider from './shared/HungerGamesPostsProvider';
import CurrentUserInfoProvider from './CurrentUserInfoProvider';
import RegisteredUserListProvider from './RegisteredUserListProvider';

function App() {
	return (
		<ValidationProvider>
			<RegisteredUserListProvider>
				<UserRegistrationProvider>
					<UserNameProvider>
						<UserEmailProvider>
							<UserPasswordProvider>
								<UserUUIDProvider>
									<UserPhotoProvider>
										<PostsProvider>
											<DaVinciPostsProvider>
												<HarryPotterPostsProvider>
													<HungerGamesPostsProvider>
														<CurrentUserInfoProvider>
															<Navbar />
															<Main />
														</CurrentUserInfoProvider>
													</HungerGamesPostsProvider>
												</HarryPotterPostsProvider>
											</DaVinciPostsProvider>
										</PostsProvider>
									</UserPhotoProvider>
								</UserUUIDProvider>
							</UserPasswordProvider>
						</UserEmailProvider>
					</UserNameProvider>
				</UserRegistrationProvider>
			</RegisteredUserListProvider>
		</ValidationProvider>
	);
}

export default App;
