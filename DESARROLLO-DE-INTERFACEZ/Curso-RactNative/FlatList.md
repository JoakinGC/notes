Componente para renderizar listas mas optimizada pero no para todas las vistas

Ej:

Sin flalist:

````javascript
const RepositoryList = () =>{

    return(

        <View>

            {repositories.map(repo =>(

                <View key={repo.id}>

                    <Text>Id: {repo.id}</Text>

                    <Text>FullName: {repo.fullName}</Text>

                    <Text>Description: {repo.description}</Text>

                    <Text>Languaje: {repo.language}</Text>

                    <Text>Stars: {repo.stargazersCount}</Text>

                    <Text>Forks: {repo.forksCount}</Text>

                    <Text>Review: {repo.reviewCount}</Text>

                    <Text>Rating: {repo.ratingAverage}</Text>

                </View>

            ))}

        </View>

    );

};
````

Con flat list:

````javascript
const RepositoryList = () =>{

    return(

        <FlatList
        data={repositories}//Contiene la informacion
       ItemSeparatorComponent={() => <Text></Text>} //Como se separa los elementos
        renderItem={({item:repo}) =>(
        //Como renderizamos los elementos
            <View key={repo.id}>
                    <Text>Id: {repo.id}</Text>
                    <Text>FullName: {repo.fullName}</Text>
                    <Text>Description: {repo.description}</Text>
                    <Text>Languaje: {repo.language}</Text>
                    <Text>Stars: {repo.stargazersCount}</Text>
                    <Text>Forks: {repo.forksCount}</Text>
                    <Text>Review: {repo.reviewCount}</Text>
                    <Text>Rating: {repo.ratingAverage}</Text>
                </View>
        )}>
        </FlatList>
        );
	};
````
