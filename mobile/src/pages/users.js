import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';

import api from '../services/node-api';
import styles from '../styles/global';

export default function UsersScreen({ navigation }) {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		await api.get('users').then(response => {
			setUsers(response.data.users);
			setLoading(false);

		}).catch(error => {
			setUsers([]);
			setLoading(false);
		});		
	}

	function renderHeader() {
		return (
			<View style={styles.pageTitle}>
				<Text style={styles.pageTitleText}>Usuários</Text>
			</View>
		);
	}

	function renderItem({ item }) {
		return (
			<View style={localStyles.itemContainer}>
				<Text style={localStyles.userName}>{item.name}</Text>
				<Text style={localStyles.userEmail}>{item.email}</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{loading ? (
				<ActivityIndicator color="#17496E" size="large" style={{ padding: 16 }} />
			) : (
				<FlatList
					data={users}
					keyExtractor={item => item.id.toString()}
					ListHeaderComponent={renderHeader}
					renderItem={renderItem}
					onRefresh={fetchData}
					refreshing={refreshing}
				/>
			)}
		</View>
	);
}

const localStyles = StyleSheet.create({
	itemContainer: {
		marginHorizontal: 16,
		marginBottom: 16,
		padding: 16,
		backgroundColor: "#FFF",
		borderWidth: 1,
		borderColor: "#dcdce6",
		borderRadius: 8,
	},

	userName: {
		color: "#41414d",
		fontWeight: "bold",
	},

	userEmail: {
		color: "#737380",
	},
});