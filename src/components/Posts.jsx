import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BiTrash } from 'react-icons/bi'
import { deletePost, getPosts } from '../actions/index'

import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Oval } from 'react-loader-spinner'
import Pagination from '../utils/pagination.js'

import swal from 'sweetalert'

const Posts = ({ postState, deletePost, getPosts }) => {
  const [nameFilter, SetNameFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(8)

  useEffect(() => {
    getPosts()
  }, [getPosts])

  const filterPosts = postState.posts.filter(post => (nameFilter.length > 0) ? post.name.toLowerCase().includes(nameFilter.toLowerCase()) : true)

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = filterPosts.slice(indexOfFirstPost, indexOfLastPost)

  if (postState.posts.length < postPerPage && currentPage !== 1) {
    setCurrentPage(1)
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const postRemoved = (postId) => {
    swal({
      title: 'Estas seguro que deseas eliminar este Post?',
      text: 'Una vez eliminado este Post no lo podras recuperar',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {
          if ((postState.posts.length - 1) % (postPerPage) === 0) {
            setCurrentPage(currentPage - 1)
          }
          deletePost(postId)
        }
      })
  }

  let loading = (<div />)
  if (postState.loading) {
    loading = (
      <div className='text-center loadingContent col-12 my-5'>
        <Oval color='#3f51b5' height={100} width={100} timeout={60000} />
      </div>
    )
  }

  return (
    <div>
      {loading}

      <Row>
        <Col className='d-flex'>
          <label className='labelSearch'> Filtrar</label>
          <input
            name='search'
            type='text'
            className='form-control searchInput'
            placeholder='Ingrese Nombre del Post'
            onChange={e => SetNameFilter(e.target.value)}
          />
        </Col>
      </Row>

      <Table striped bordered hover className='mb-0'>
        <thead>
          <tr>
            <th> Id </th>
            <th> Nombre </th>
            <th> Descripción </th>
            <th> Acción </th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post, i) => (
            <tr key={i}>
              <td> {post.id} </td>
              <td> {post.name} </td>
              <td> {post.description} </td>
              <td> <BiTrash className='iconPost delete scale' onClick={() => postRemoved(post.id)} /> </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Col className='d-flex'>
          <Pagination postsPerPage={postPerPage} totalPosts={filterPosts.length} paginate={paginate} />
        </Col>
        <Col xs={3} className='text-right'>
          <p className='mb-0 mt-1 mr-2'> Mostrando {currentPosts.length} de {filterPosts.length} Posts </p>
        </Col>
      </Row>

    </div>
  )
}

const mapStateProps = ({ postState, messageState }) => ({ postState, messageState })

export default connect(mapStateProps, { deletePost, getPosts })(Posts)
