Para usar la funcion de React native se usa la funcion map pero la funcion fecha en debe usar{} se usa ():

```javascript
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
```