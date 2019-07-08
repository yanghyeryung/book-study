import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SectionList } from 'react-native';
import BookItem from './BookItem';

const mockBooks = [
    {
        rank: 1,
        title: 'GATHERING PREY',
        author: 'John Sandford',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg'
    },
    {
        rank: 3,
        title: 'GATHERING PREY3',
        author: 'John Sandford',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg'
    },
    {
        rank: 5,
        title: 'GATHERING PREY5',
        author: 'John Sandford',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg'
    },
];

const mockBooks2 = [
    {
        rank: 2,
        title: 'MEMORY MAN',
        author: 'David Baldacci',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg'
    },
    {
        rank: 4,
        title: 'MEMORY MAN4',
        author: 'David Baldacci',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg'
    },
    {
        rank: 6,
        title: 'MEMORY MAN6',
        author: 'David Baldacci',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg'
    }
];

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: [
                {
                    title: 'GATHERING PREY5',
                    data: this._addKeysToBooks(mockBooks)
                },
                {
                    title: 'MEMORY MAN6',
                    data: this._addKeysToBooks(mockBooks2)
                }
            ]
        };
    }

    _renderItem = ({ item }) => {
        return (
            <BookItem
                coverURL={item.book_image}
                title={item.key}
                author={item.author}
            />
        );
    }

    _renderHeader = ({ section }) => {
        return (
            <Text style={styles.headingText}>
                {section.title}
            </Text>
        );
    };

    _addKeysToBooks = books => {
        return books.map(book => {
            return Object.assign(book, { key: book.title })
        });
    };

    render() {
        return <SectionList sections={this.state.section} renderItem={this._renderItem} renderSectionHeader={this._renderHeader}/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    headingText: {
        fontSize: 24,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 2,
        paddingBottom: 2
    }
});

export default BookList;